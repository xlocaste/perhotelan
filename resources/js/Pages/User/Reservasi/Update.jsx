import React from "react";
import { useForm, Link } from "@inertiajs/react";
import Navbar from "../_components/Navbar";

const Update = ({ reservasi }) => {
    const { data, setData, put, processing, errors } = useForm({
        tamu_id: reservasi.tamu_id || "",
        kamar_id: reservasi.kamar_id || "",
        check_in: reservasi.check_in || "",
        check_out: reservasi.check_out || "",
        status: reservasi.status || "",
    });

    console.log(reservasi)

    const handleSubmit = (e) => {
        e.preventDefault();

        put(route("user.reservasi.updateUser", reservasi.id));
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="max-w-4xl mx-auto py-8 px-4">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            Update Status Reservasi
                        </h1>
                        <p className="text-sm text-gray-500">
                            Ubah status reservasi pelanggan.
                        </p>
                    </div>

                    <Link
                        href={route("user.reservasi.indexUser")}
                        className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                    >
                        Kembali
                    </Link>
                </div>

                <div className="bg-white rounded-xl shadow border">
                    <div className="p-6">
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Kode Reservasi
                                    </label>
                                    <input
                                        type="text"
                                        value={reservasi.kode}
                                        disabled
                                        className="w-full rounded-lg bg-gray-100 border-gray-300"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Tamu
                                    </label>
                                    <input
                                        type="text"
                                        value={reservasi.tamu?.user?.name || "-"}
                                        disabled
                                        className="w-full rounded-lg bg-gray-100 border-gray-300"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Kamar
                                    </label>
                                    <input
                                        type="text"
                                        value={`Kamar ${reservasi.kamar?.nomor_kamar}`}
                                        disabled
                                        className="w-full rounded-lg bg-gray-100 border-gray-300"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Status
                                    </label>

                                    <select
                                        value={data.status}
                                        onChange={(e) =>
                                            setData("status", e.target.value)
                                        }
                                        className="w-full rounded-lg border-gray-300"
                                    >
                                        <option value="pending">
                                            Pending
                                        </option>
                                        <option value="checkin">
                                            Check In
                                        </option>
                                        <option value="checkout">
                                            Check Out
                                        </option>
                                        <option value="cancel">
                                            Cancel
                                        </option>
                                    </select>

                                    {errors.status && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.status}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Check In
                                    </label>
                                    <input
                                        type="date"
                                        value={reservasi.check_in}
                                        disabled
                                        className="w-full rounded-lg bg-gray-100 border-gray-300"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Check Out
                                    </label>
                                    <input
                                        type="date"
                                        value={reservasi.check_out}
                                        disabled
                                        className="w-full rounded-lg bg-gray-100 border-gray-300"
                                    />
                                </div>
                            </div>

                            <div className="border-t pt-4 flex justify-end gap-3">
                                <Link
                                    href={route("user.reservasi.indexUser")}
                                    className="px-5 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                                >
                                    Batal
                                </Link>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                                >
                                    {processing
                                        ? "Menyimpan..."
                                        : "Update Status"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;
