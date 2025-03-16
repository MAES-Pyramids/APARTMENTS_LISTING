import DepartmentDetails from "@/components/departments/DepartmentDetails";
import { DepartDetails } from "@/types/types";

type Props = {
  params: { id: string };
};

export default async function Page({ params }: Props) {
  const { id } = params;

  const res = await fetch(`http://localhost:3333/api/v1/apartments/${id}`);
  const jsonData = await res.json();
  const department = jsonData.data;

  console.log(department);

  const departmentDetails: DepartDetails = {
    id: department?.id,
    unitName: department?.unitName,
    unitType: department?.unitType,
    projectName: department?.projectName,
    available: department?.available,
    mainImage: department?.mainImage,
    imagesGallery: department?.imagesGallery,
    unitAddress: {
      fullAddress: department?.unitAddress?.fullAddress,
      city: department?.unitAddress?.city,
      district: department?.unitAddress?.district,
    },
    unitDetails: {
      unitSize: department?.unitDetails?.unitSize,
      numberOfBedrooms: department?.unitDetails?.numberOfBedrooms,
      numberOfBathrooms: department?.unitDetails?.numberOfBathrooms,
      hasElevator: department?.unitDetails?.hasElevator,
      floorNumber: department?.unitDetails?.floorNumber,
    },
    contactDetails: {
      agentName: department?.contactDetails?.agentName,
      phone: department?.contactDetails?.phone,
      email: department?.contactDetails?.email,
    },
    rentingPrice: department?.rentingPrice,
    description: department?.description,
    averageRating: department?.averageRating,
  };

  return (
    <div className="bg-[#bdc7bc42] min-h-screen lg:py-16 py-12">
      <div className="section-wrapper">
        <DepartmentDetails department={departmentDetails} />
      </div>
    </div>
  );
}
