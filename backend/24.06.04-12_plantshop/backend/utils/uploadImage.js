import cloudinary from "cloudinary";

export const uploadImage = async (byteArrayBuffer) => {
  const uploadResult = await new Promise((resolve) => {
    cloudinary.v2.uploader
      .upload_stream((error, uploadResult) => {
        console.log(error);
        return resolve(uploadResult);
      })
      .end(byteArrayBuffer);
  });

  return uploadResult;
};

// * Variante mit Speicherung in einem bestimmten cloudinary-Ordner
// import cloudinary from "cloudinary";

// export const uploadImage = async (byteArrayBuffer) => {
//   const uploadResult = await new Promise((resolve) => {
//     cloudinary.v2.uploader
//       .upload_stream(
//         { folder: "EventPilot/eventImages" },
//         (error, uploadResult) => {
//           console.log(error);
//           return resolve(uploadResult);
//         }
//       )
//       .end(byteArrayBuffer);
//   });
//   console.log(uploadResult);

//   return uploadResult;
// };
