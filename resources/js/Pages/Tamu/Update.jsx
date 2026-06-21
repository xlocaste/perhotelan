import React from "react";
import { useForm, Link, Head } from "@inertiajs/react";

const Update = ({ tamu }) => {
    const { data, setData, put, processing, errors } = useForm({
        name: tamu.user?.name || "",
        email: tamu.user?.email || "",
        no_ktp: tamu.no_ktp || "",
        no_hp: tamu.no_hp || "",
        alamat: tamu.alamat || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("tamu.update", tamu.id));
    };

    return (
        <>
            <Head title="Edit Tamu" />

            <div>
                <h1>Edit Tamu</h1>

                <Link href={route("tamu.index")}>
                    Kembali
                </Link>

                <form onSubmit={handleSubmit}>

                    <div>
                        <label>Nama Lengkap</label>
                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) =>
                                setData("name", e.target.value)
                            }
                        />
                        {errors.name && (
                            <div>{errors.name}</div>
                        )}
                    </div>

                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            value={data.email}
                            onChange={(e) =>
                                setData("email", e.target.value)
                            }
                        />
                        {errors.email && (
                            <div>{errors.email}</div>
                        )}
                    </div>

                    <div>
                        <label>No KTP</label>
                        <input
                            type="text"
                            value={data.no_ktp}
                            onChange={(e) =>
                                setData("no_ktp", e.target.value)
                            }
                        />
                        {errors.no_ktp && (
                            <div>{errors.no_ktp}</div>
                        )}
                    </div>

                    <div>
                        <label>No HP</label>
                        <input
                            type="text"
                            value={data.no_hp}
                            onChange={(e) =>
                                setData("no_hp", e.target.value)
                            }
                        />
                        {errors.no_hp && (
                            <div>{errors.no_hp}</div>
                        )}
                    </div>

                    <div>
                        <label>Alamat</label>
                        <textarea
                            value={data.alamat}
                            onChange={(e) =>
                                setData("alamat", e.target.value)
                            }
                        />
                        {errors.alamat && (
                            <div>{errors.alamat}</div>
                        )}
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={processing}
                        >
                            Update
                        </button>
                    </div>

                </form>
            </div>
        </>
    );
};

export default Update;
