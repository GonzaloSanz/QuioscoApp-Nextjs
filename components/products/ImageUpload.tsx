"use client"

import { getImagePath } from "@/src/utils";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";
import { TbPhotoPlus } from "react-icons/tb";

type ImageUploadProps = {
    image: string | undefined
}

const ImageUpload = ({ image }: ImageUploadProps) => {
    const [imageUrl, setImageUrl] = useState('');

    return (
        <CldUploadWidget
            uploadPreset="mi_upload_preset"
            onSuccess={(result, { widget }) => {
                if (result.event == 'success') {
                    widget.close();
                    // @ts-ignore
                    setImageUrl(result.info?.secure_url);
                }
            }}
            options={{
                maxFiles: 1
            }}
        >
            {({ open }) => (
                <>
                    <div className="space-y-2 mb-8">
                        <label className="text-slate-800 font-semibold">Imagen:</label>

                        <div onClick={() => open()} className="relative cursor-pointer hover:opacity-70 transition p-10 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600 bg-slate-100">
                            <TbPhotoPlus
                                size={50}
                            />
                            <p className="text-lg font-semibold">Agregar Imagen</p>

                            {imageUrl && (
                                <div className="absolute inset-0 w-full h-full">
                                    <Image
                                        fill
                                        style={{ objectFit: 'contain' }}
                                        src={imageUrl}
                                        alt="Imagen del producto"
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    {image && !imageUrl && (
                        <div className="space-y-2 mb-8">
                            <label>Imagen Actual:</label>
                            <div className="relative w-64 h-64">
                                <Image 
                                    fill
                                    src={getImagePath(image)}
                                    alt="Imagen Producto"
                                    style={{objectFit: 'contain'}}
                                />
                            </div>
                        </div>
                    )}

                    <input
                        name="image"
                        type="hidden"
                        defaultValue={imageUrl ? imageUrl : image}
                    />
                </>
            )}
        </CldUploadWidget>
    )
}

export default ImageUpload;