"use client";
import { useState } from "react";
import TextInput from "../common/TextInput";

export default function DepartmentFilter() {
  const [selectedOption, setSelectedOption] = useState<{
    label: string;
    value: string;
  } | null>(null);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="mb-6">
      <h3 className="text-lg md:text-2xl text-[#4D5F65] font-bold mb-3">
        Filter
      </h3>
      <div className="flex items-center flex-wrap gap-3">
        <TextInput
          label="Search"
          value={inputValue}
          placeholder="Enter department name"
          onRowChange={(e) => setInputValue(e.target.value)}
          className="w-full"
        />
      </div>
    </div>
  );
}
