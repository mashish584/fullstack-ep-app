import React, { useState, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { gql, useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import "react-datepicker/dist/react-datepicker.css";

import Button from "../../components/Button";
import Navigation from "../../components/Navigation";
import SectionHead from "../../components/SectionHead";
import Switch from "../../components/Switch";

import { AddEventContainer } from "../../styles/addEvent.style";
import { InputContainer, TextInput, TextArea, InputFlexContainer } from "../../styles/form.style";
import { handleAsync, handleFileReader, handleImage } from "../../utils";
import LocationInput from "../../components/LocationInput";
import Error from "../../components/Error";
import MediaThumbnails from "../../components/MediaThumbnails";

const eventValidationSchema = Yup.object().shape({
	title: Yup.string().trim().required("Please enter title."),
	description: Yup.string().trim().min(55, "Please provide min 55 characters description.").required("Please provide description."),
	categories: Yup.array().min(1, "Please add atleast one category."),
	uploadFiles: Yup.array().min(1, "Please add atleast one image."),
	price: Yup.number().typeError("You must specify a value as number."),
	eventDate: Yup.string().required("Please select event date."),
	eventTime: Yup.string().required("Please select event time."),
	location: Yup.string().required("Please select location."),
});

const ADD_EVENT_MUTATION = gql`
	mutation createEvent(
		$title: String!
		$description: String!
		$eventTimestamp: String!
		$category: [String]!
		$location: String!
		$price: Float!
	) {
		createEvent(
			data: {
				title: $title
				description: $description
				eventTimestamp: $eventTimestamp
				category: $category
				location: $location
				price: $price
			}
		) {
			id
		}
	}
`;

const UPLOAD_MEDIA_MUTATION = gql`
	mutation uploadEventMedia($file: Upload!, $event: Int!) {
		uploadEventMedia(file: $file, eventId: $event) {
			id
		}
	}
`;

type FileType = {
	filename: string;
	width: number;
	height: number;
	base64: string;
	file: File;
};

interface InitialValues {
	title: string;
	description: string;
	location: string;
	categories: string[];
	price: number;
	eventDate: string;
	eventTime: string;
	uploadFiles: FileType[];
}

const AddEvent = () => {
	const initialValues: InitialValues = {
		title: "",
		description: "",
		location: "",
		categories: [],
		price: 0,
		eventDate: "",
		eventTime: "",
		uploadFiles: [],
	};

	const [onAddEvent] = useMutation(ADD_EVENT_MUTATION);
	const [onMediaUpload] = useMutation(UPLOAD_MEDIA_MUTATION);
	const inputFileRef = useRef<HTMLInputElement>(null);
	const [isPaidEvent, setIsPaidEvent] = useState<boolean>(false);

	const { errors, touched, ...formik } = useFormik({
		initialValues,
		validationSchema: eventValidationSchema,
		onSubmit: handleAsync(async (values: InitialValues) => {
			const { eventDate, eventTime, title, description, categories, location, price, uploadFiles } = values;

			const [date, time] = [dayjs(eventDate).format("YYYY-MM-DD"), dayjs(eventTime).format("HH:mm")];
			const eventTimestamp = dayjs(`${date} ${time}`, "YYYY-MM-DD HH:mm").toISOString();
			const { data } = await onAddEvent({
				variables: {
					title,
					description,
					location,
					eventTimestamp,
					price: parseFloat(Number(price).toFixed(2)),
					category: categories,
				},
			});

			if (data.createEvent) {
				const eventId = data.createEvent.id;
				await Promise.all(uploadFiles.map(({ file }) => onMediaUpload({ variables: { file, event: parseInt(eventId) } })));
				formik.resetForm();
				toast.success("Event successfully created.");
			}
		}),
	});

	const handleImageSelection = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const { files } = e.target;
		if (files.length) {
			const validFiles = [...formik.values.uploadFiles];

			//Filter out the images which is not match the minimum dimension requirement & image mime
			for (let i = 0; i < files.length; i++) {
				const file = files[i];
				if (file.type.includes("image")) {
					const result = await handleFileReader(file);
					const image = await handleImage(result.toString());

					const filename = file.name;
					const width = image.naturalWidth || image.width;
					const height = image.naturalHeight || image.height;

					if (width >= 1200 && height >= 600) {
						validFiles.push({
							filename,
							width,
							height,
							file,
							base64: image.src,
						});
					} else {
						alert(`${filename} is not have a valid dimension.`);
					}
				}
			}

			if (validFiles.length) {
				formik.setFieldValue("uploadFiles", validFiles);
			}

			inputFileRef.current.value = null;
		}
	};

	const onMediaRemove = (index) => {
		//Remove media
		const medias = [...formik.values.uploadFiles];
		medias.splice(index, 1);
		formik.setFieldValue("uploadFiles", medias);
	};

	const onAddEventFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		formik.handleSubmit();
	};

	return (
		<AddEventContainer>
			<Navigation className="menu_extend" />
			<section>
				<div id="event__form">
					<SectionHead title="Add Event" />
					<form onSubmit={onAddEventFormSubmit}>
						<InputContainer mb={21}>
							<label htmlFor="username">Title</label>
							<TextInput type="text" id="title" name="title" onChange={formik.handleChange} value={formik.values.title} />
							{errors.title && touched.title ? <Error message={errors.title} /> : null}
						</InputContainer>
						<InputContainer mb={21}>
							<label htmlFor="username">Description</label>
							<TextArea id="title" name="description" rows={5} onChange={formik.handleChange} value={formik.values.description} />
							{errors.description && touched.description ? <Error message={errors.description} /> : null}
						</InputContainer>
						<InputContainer mb={21}>
							<label htmlFor="username">Location</label>
							<LocationInput
								value={formik.values.location}
								handleChange={(address) => {
									formik.setFieldValue("location", address, false);
								}}
							/>
							{errors.location && touched.location ? <Error message={errors.location} /> : null}
						</InputContainer>
						<InputFlexContainer mb={"21px"}>
							<InputContainer width={"35%"} mr={15}>
								<label htmlFor="date">Event Date</label>
								<div className="datetime__picker">
									<DatePicker
										id="date"
										dateFormat="dd/MM/yyyy"
										selected={formik.values.eventDate}
										onChange={(timestamp) => {
											formik.setFieldValue("eventDate", timestamp);
										}}
										customInput={<TextInput type="text" />}
										popperPlacement="top-end"
									/>
									{errors.eventDate && touched.eventDate ? <Error message={errors.eventDate} /> : null}
								</div>
							</InputContainer>
							<InputContainer width={"35%"} mr={15}>
								<label htmlFor="time">Event Time</label>
								<div className="datetime__picker">
									<DatePicker
										id="time"
										selected={formik.values.eventTime}
										onChange={(timestamp) => {
											formik.setFieldValue("eventTime", timestamp);
										}}
										dateFormat="HH:mm aa"
										customInput={<TextInput type="text" />}
										popperPlacement="top-end"
										showTimeSelectOnly={true}
										showTimeInput={true}
									/>
									{errors.eventTime && touched.eventTime ? <Error message={errors.eventTime} /> : null}
								</div>
							</InputContainer>
							{isPaidEvent && (
								<InputContainer width={"15%"}>
									<label htmlFor="username">Price</label>
									<TextInput type="text" id="price" name="price" onChange={formik.handleChange} value={formik.values.price} />
									{errors.price && touched.price ? <Error message={errors.price} /> : null}
								</InputContainer>
							)}
						</InputFlexContainer>
						<Switch title="Paid" mb={21} onChange={() => setIsPaidEvent((prev) => !prev)} isOn={isPaidEvent} />
						<InputContainer mb={21}>
							<label htmlFor="username">Categories</label>
							<div id="checkboxContainer">
								{["Tailgating", "Outdoor", "House", "Inaugration", "Match"].map((category) => {
									return (
										<label htmlFor={category}>
											<input
												id={category}
												type="checkbox"
												name="categories"
												value={category}
												onChange={formik.handleChange}
												checked={formik.values?.categories?.includes(category)}
											/>
											{category}
										</label>
									);
								})}
							</div>
							{errors.categories && touched.categories ? <Error message={errors.categories} /> : null}
						</InputContainer>

						<InputContainer mb={21}>
							<label htmlFor="username">Upload Images</label>
							<MediaThumbnails medias={formik.values.uploadFiles.map((file) => file.base64)} onRemove={onMediaRemove} />
							<div id="upload">
								<input type="file" ref={inputFileRef} name="images" accept="image/*" max={4} onChange={handleImageSelection} multiple />
								<p>You can upload upto 4 images and each image should have minimum dimensions of 1200px x 600px.</p>
							</div>
							{errors.uploadFiles && touched.uploadFiles ? <Error message={errors.uploadFiles} /> : null}
						</InputContainer>
						<Button type="submit" style={{ margin: "21px 0" }}>
							Add Event
						</Button>
					</form>
				</div>
			</section>
		</AddEventContainer>
	);
};

export default AddEvent;
