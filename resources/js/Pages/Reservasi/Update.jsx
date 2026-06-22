import React from "react";
import { useForm, Link, Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const Update = ({ reservasi, tamu = [], kamar = [] }) => {
    const { data, setData, put, processing, errors } = useForm({
        tamu_id: reservasi.tamu_id || "",
        kamar_id: reservasi.kamar_id || "",
        check_in: reservasi.check_in || "",
        check_out: reservasi.check_out || "",
        status: reservasi.status || "pending",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("reservasi.update", reservasi.id));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Edit Reservasi
                </h2>
            }
        >
            <Head title="Edit Reservasi" />
            <div className="max-w-3xl mx-auto">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Edit Data Reservasi
                    </h1>
                    <p className="mt-1 text-sm text-gray-600">
                        Perbarui informasi reservasi pada form di bawah.
                    </p>
                </div>

                <div className="bg-white shadow-sm rounded-lg">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <Link
                            href={route("reservasi.index")}
                            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
                        >
                            <svg
                                className="w-4 h-4 mr-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                ></path>
                            </svg>
                            Kembali ke Daftar Reservasi
                        </Link>
                    </div>

                    <div className="p-6">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="tamu_id"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Nama Tamu
                                </label>
                                <div className="mt-1">
                                    <select
                                        id="tamu_id"
                                        value={data.tamu_id}
                                        onChange={(e) =>
                                            setData("tamu_id", e.target.value)
                                        }
                                        className={`block w-full px-3 py-2 border bg-white rounded-md shadow-sm focus:outline-none sm:text-sm ${
                                            errors.tamu_id
                                                ? "border-red-500 text-red-900 focus:ring-red-500 focus:border-red-500"
                                                : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                                        }`}
                                    >
                                        <option value="">
                                            -- Pilih Tamu --
                                        </option>
                                        {tamu.map((item) => (
                                            <option
                                                key={item.id}
                                                value={item.id}
                                            >
                                                {item.nama}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.tamu_id && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {errors.tamu_id}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="kamar_id"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Nomor Kamar
                                </label>
                                <div className="mt-1">
                                    <select
                                        id="kamar_id"
                                        value={data.kamar_id}
                                        onChange={(e) =>
                                            setData("kamar_id", e.target.value)
                                        }
                                        className={`block w-full px-3 py-2 border bg-white rounded-md shadow-sm focus:outline-none sm:text-sm ${
                                            errors.kamar_id
                                                ? "border-red-500 text-red-900 focus:ring-red-500 focus:border-red-500"
                                                : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                                        }`}
                                    >
                                        <option value="">
                                            -- Pilih Kamar --
                                        </option>
                                        {kamar.map((item) => (
                                            <option
                                                key={item.id}
                                                value={item.id}
                                            >
                                                {item.nomor_kamar}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.kamar_id && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {errors.kamar_id}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="check_in"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Tanggal Check In
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="date"
                                        id="check_in"
                                        value={data.check_in}
                                        onChange={(e) =>
                                            setData("check_in", e.target.value)
                                        }
                                        className={`block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                                            errors.check_in
                                                ? "border-red-500 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500"
                                                : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                                        }`}
                                    />
                                    {errors.check_in && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {errors.check_in}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="check_out"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Tanggal Check Out
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="date"
                                        id="check_out"
                                        value={data.check_out}
                                        onChange={(e) =>
                                            setData("check_out", e.target.value)
                                        }
                                        className={`block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                                            errors.check_out
                                                ? "border-red-500 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500"
                                                : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                                        }`}
                                    />
                                    {errors.check_out && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {errors.check_out}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="status"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Status
                                </label>
                                <div className="mt-1">
                                    <select
                                        id="status"
                                        value={data.status}
                                        onChange={(e) =>
                                            setData("status", e.target.value)
                                        }
                                        className={`block w-full px-3 py-2 border bg-white rounded-md shadow-sm focus:outline-none sm:text-sm ${
                                            errors.status
                                                ? "border-red-500 text-red-900 focus:ring-red-500 focus:border-red-500"
                                                : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                                        }`}
                                    >
                                        <option value="pending">Pending</option>
                                        <option value="checkin">
                                            Check In
                                        </option>
                                        <option value="checkout">
                                            Check Out
                                        </option>
                                        <option value="batal">Batal</option>
                                    </select>
                                    {errors.status && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {errors.status}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="flex justify-end pt-4 border-t border-gray-200">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="inline-flex items-center px-6 py-3 bg-indigo-600 border border-transparent rounded-md font-semibold text-sm text-white uppercase tracking-widest hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in-out duration-150 disabled:opacity-50"
                                >
                                    {processing && (
                                        <svg
                                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            ></path>
                                        </svg>
                                    )}
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Update;
