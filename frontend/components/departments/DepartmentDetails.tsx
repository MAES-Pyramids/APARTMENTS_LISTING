import { MapPin } from "lucide-react";
import Gallery from "./Gallery";
import { DepartDetails } from "@/types/types";

// Define the interface for DepartmentDetails props
interface DepartmentDetailsProps {
    department: DepartDetails;
}

export default function DepartmentDetails({ department }: DepartmentDetailsProps) {
    return (
        <>
            <Gallery imagesGallery={department.imagesGallery} />

            <div className="flex lg:items-start lg:flex-row flex-col gap-6">
                <CardDetails department={department} />
                <DepartmentInfo department={department} />
            </div>

            <ContactCard contactDetails={department.contactDetails} />
        </>
    );
}

// Define the interface for DepartmentInfo props
interface DepartmentInfoProps {
    department: DepartDetails;
}

function DepartmentInfo({ department }: DepartmentInfoProps) {
    return (
        <div className="p-5 rounded-xl bg-white shadow-lg flex-1">
            <div className="flex flex-col items-start gap-y-2">
                <span className="text-gray-400 mb-1 text-lg capitalize">Location</span>

                <div className="text-[#4D5F65] font-bold flex items-center gap-x-1 text-xl md:text-2xl">
                    <MapPin />
                    <span>
                        {`${department.unitAddress.fullAddress}, ${department.unitAddress.city}` 
                        || "No address available"}
                    </span>
                </div>
            </div>

            <div className="flex flex-col items-start gap-y-[6px] mt-4">
                <span className="text-gray-400 mb-1 sm:text-xl text-lg capitalize font-bold">
                    {department?.description}
                </span>

                <p className="text-[#4D5F65] sm:text-lg text-base">
                    {department.description || "No description available."}
                </p>
            </div>

            <div className="flex flex-col items-start gap-y-2 mt-4">
                <span className="text-lg md:text-xl font-semibold text-[#4D5F65]">Price</span>
                <span className="text-lg md:text-2xl font-bold text-[#4D5F65]">
                    ${department.rentingPrice.toLocaleString()}
                </span>
            </div>
        </div>
    );
}

// Define the interface for CardDetails props
interface CardDetailsProps {
    department: DepartDetails;
}

function CardDetails({ department }: CardDetailsProps) {
    const elevator = department?.unitDetails?.hasElevator ? "Yes" : "No";

    const items = [
        { title: "project name", value: department?.projectName },
        { title: "unit name", value: department?.unitName },
        { title: "unit type", value: department?.unitType },
        { title: "unit name", value: department?.unitName },
        { title: "Price", value: `$${department?.rentingPrice}` },
        { title: "Area", value: `${department?.unitDetails?.unitSize} sqm` },
        { title: "Rooms", value: department?.unitDetails?.numberOfBedrooms },
        { title: "Bathrooms", value: department?.unitDetails?.numberOfBathrooms },
        { title: "Has Elevator", value: elevator },
        { title: "floor Number", value: department?.unitDetails?.floorNumber },
        
    ];

    return (
        <div className="p-5 rounded-xl bg-white shadow-lg flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-6">
                {items.map((item, index) => (
                    <CardDetailsItem 
                        key={`${index}:- ${item.title}`} 
                        title={item.title} 
                        value={item.value} 
                    />
                ))}
            </div>
        </div>
    );
}

// Define the interface for CardDetailsItem props
interface CardItemProps {
    title: string;
    value: string | number;
}

type ContactCardProps = {
    agentName : string;
    phone : number;
    email: string
}

function ContactCard ({ contactDetails} : ContactCardProps) {
    const contactData = [
        { title: "Agent Name", value: contactDetails?.agentName },
        { title: "Phone", value: contactDetails?.phone },
        { title: "Email", value: contactDetails?.email },
    ]
    return (
        <div className="p-5 rounded-xl bg-white shadow-lg flex-1 mt-5">
            <h4 className="text-xl md:text-2xl text-[#4D5F65] mb-4 font-semibold">
                Contact Details
            </h4>

            {
                contactData.map((item, index) => (
                    <CardDetailsItem 
                        key={`${index}:- ${item.title}`} 
                        title={item.title} 
                        value={item.value} 
                    />
                ))
            }
        </div>
    )
}


function CardDetailsItem({ title, value }: CardItemProps) {
    return (
        <div className="flex flex-col items-start gap-y-1">
            <span className="text-[#4D5F65] mb-1">{title}</span>
            <div className="text-black font-bold">{value}</div>
        </div>
    );
}