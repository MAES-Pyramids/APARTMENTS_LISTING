import DepartmentCard from "@/components/departments/DepartmentCard";
import DepartmentFilter from "@/components/departments/DepartmentsFilter";
import { IDepartment } from "@/types/types";


export default async function DepartmentsList () {
    let data = await fetch("https://api.quickr.tech/nawy/api/v1/apartments")

    let departments = await data?.json();


    return (
        <div className="bg-[#bdc7bc42] min-h-screen lg:py-16 py-12">
            <div className="section-wrapper">
                <DepartmentFilter />

                {
                    departments?.data?.items?.length > 0 ? 
                        departments?.data?.items?.map(({
                            id, available, averageRating, 
                            mainImage, unitAddress, unitDetails, 
                            unitName, unitType, rentingPrice, description
                        }: IDepartment) => (
                            <DepartmentCard
                                key={id}
                                id={id}
                                available={available}
                                averageRating={averageRating}
                                mainImage={mainImage}
                                unitAddress={unitAddress}
                                unitDetails={unitDetails}
                                unitName={unitName}
                                unitType={unitType}
                                rentingPrice={rentingPrice}
                                description={description}
                            />
                        ))
                        :
                        <div className="flex justify-center items-center">
                            <h3 className="text-2xl text-[#4D5F65] font-bold">No Departments Available</h3>
                        </div>
                }

            </div>
        </div>
    )
}