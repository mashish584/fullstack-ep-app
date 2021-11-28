import ImageKit from "imagekit";

// // Imagekit Config
const image_kit = new ImageKit({
  publicKey: "+JE8PfIjYBQRK9HetdmckTFEyVM=",
  privateKey: "kCbtf4wxmt4o2TewdBoCn3ncBn0=",
  urlEndpoint: "https://ik.imagekit.io/imashish/",
});

// Imagekit upload & delete
export const upload_on_imagekit = async (file, filename) => {
  try {
    const upload = await image_kit.upload({
      file: file.toString("base64"),
      fileName: filename,
      folder: "/ep2",
      isPrivateFile: false,
    });
    console.log({ upload });
    return upload;
  } catch (error) {
    console.log({ error });
    throw error;
  }
};

exports.delete_image_from_imagekit = (path) => image_kit.deleteFile(path);
