import { Media } from "@prisma/client";
import { upload_on_imagekit } from "../../middlewares/upload";
import { contextType } from "../../types";
import { S2B } from "../../utils";

export const uploadEventMedia = async (parent, args, { prisma }: contextType, info): Promise<Media> => {
  const upload = await args.file;

  // TODO: Upload validation
  if (!upload) throw new Error("Please upload");
  if (!upload.mimetype.includes("image")) throw new Error("Invalid Upload");

  // TODO: Stream to Buffer conversion
  const buffer = await S2B(upload.createReadStream());

  const { url, thumbnailUrl } = await upload_on_imagekit(buffer, upload.filename);

  const media = await prisma.media.create({
    data: {
      link: url,
      thumbnail: thumbnailUrl,
      event: {
        connect: {
          id: args.eventId,
        },
      },
    },
  });

  return media;
};
