import React, { useRef } from "react";
import { FieldError } from "react-hook-form";
import { BiImage } from "react-icons/bi";

import { ImageLoaderStyle } from "./style";

type Prop = {
  onSaveFile: (file: File) => void;
  errors?: FieldError | undefined;
  setValue?: (file: any) => void;
  clearError?: (name: string) => void;
  selectedImage: string;
  onSelectedImage: (img: string) => void;
  width?: string;
  height?: string;
};

const ImageLoader = ({
  selectedImage,
  onSelectedImage,
  onSaveFile,
  errors,
  setValue,
  clearError,
  width,
  height,
}: Prop) => {
  const inputImage = useRef<any>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    console.log(file?.size, "sizeFile");
    if (file) {
      setValue && setValue(file);
      clearError && clearError("file");
      const reader = new FileReader();
      onSaveFile(file);
      reader.onload = (e) => {
        onSelectedImage(e.target.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <ImageLoaderStyle
      $width={width}
      $height={height}
      $error={errors !== undefined}
    >
      <div
        className="box-loader"
        onClick={() => {
          console.log("click");
          inputImage?.current?.click();
        }}
      >
        <BiImage />
        <p>Elige una imagen</p>
      </div>
      {selectedImage && <img src={selectedImage} alt="preview" />}

      <input
        type="file"
        name="image"
        onChange={handleChange}
        ref={inputImage}
        accept=".jpg, .jpeg, .png"
      />
    </ImageLoaderStyle>
  );
};

export default ImageLoader;
