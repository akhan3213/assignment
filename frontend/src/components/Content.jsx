import React from "react";
import { useForm } from "react-hook-form";

const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
  };

  return (
    <div className="w-full flex justify-center items-center h-screen bg-gray-500">
      <div className="bg-gray-300 p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">User Input Form</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Text Field: Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              {...register("fullName", { required: "Full Name is required" })}
              className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${
                errors.fullName
                  ? "border-red-500 ring-red-300"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Dropdown: Gender */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Gender
            </label>
            <select
              {...register("gender", { required: "Please select a gender" })}
              className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${
                errors.gender
                  ? "border-red-500 ring-red-300"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <p className="text-red-500 text-sm mt-1">
                {errors.gender.message}
              </p>
            )}
          </div>

          {/* Radio Buttons: Subscription */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Subscription Type
            </label>
            <div className="space-y-1">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="basic"
                  {...register("subscription", {
                    required: "Please select a subscription type",
                  })}
                  className="mr-2"
                />
                Basic
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="premium"
                  {...register("subscription", {
                    required: "Please select a subscription type",
                  })}
                  className="mr-2"
                />
                Premium
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="pro"
                  {...register("subscription", {
                    required: "Please select a subscription type",
                  })}
                  className="mr-2"
                />
                Pro
              </label>
            </div>
            {errors.subscription && (
              <p className="text-red-500 text-sm mt-1">
                {errors.subscription.message}
              </p>
            )}
          </div>

          {/* Checkbox: Terms */}
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                {...register("terms", {
                  required: "You must agree to the terms and conditions",
                })}
                className="mr-2"
              />
              I agree to the terms and conditions
            </label>
            {errors.terms && (
              <p className="text-red-500 text-sm mt-1">
                {errors.terms.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
