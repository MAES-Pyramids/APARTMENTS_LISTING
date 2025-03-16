import Image1 from "@/public/department-1.jpeg";
import Image2 from "@/public/department-2.jpeg";
import Image3 from "@/public/department-3.jpeg";
import Image4 from "@/public/department-4.jpeg";
import Image from "next/image";

export default function Gallery ({ imagesGallery }: { imagesGallery: string[] }) {
    const images = [ Image1, Image2, Image3, Image4 ];

    return (
        <div className="mb-6 flex items-center justify-center gap-5 flex-wrap ">
            {
                imagesGallery?.map((url, index) => (
                    <Image
                        key={`${index}-${url}`}
                        src={url}
                        alt="department"
                        className="w-[200px] h-[180px] rounded-lg object-cover cursor-pointer"
                        loading="lazy"
                        height={180}
                        width={200}
                    />
                ))
            }
        </div>
    )
}
