import DepartmentCard from "@/components/departments/DepartmentCard";
import DepartmentDetails from "@/components/departments/DepartmentDetails";
import DepartmentFilter from "@/components/departments/DepartmentsFilter";
import Link from "next/link";



export default function Home() {
  return (
    <div className="bg-[#bdc7bc42] min-h-screen lg:py-16 py-12">
      <div className="section-wrapper">
            <Link href="/departments">
              <span>
              departments-list
              </span>
          </Link>
      </div>
    </div>
  );
}