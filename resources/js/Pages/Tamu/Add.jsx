import React from "react";
import { useForm, Link, Head } from "@inertiajs/react";

const Add = () => {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        no_ktp: "",
        no_hp: "",
        alamat: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("tamu.store"));
    };

    return (
        <>
            <Head title="Tambah Tamu" />

            <div>
                <h1>Tambah Tamu</h1>

                <Link href={route("tamu.index")}>
                    Kembali
                </Link>

                <form onSubmit={handleSubmit}>

                    <div>
                        <label>Nama Lengkap</label>
                        <br />
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
                        <br />
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
                        <label>Password</label>
                        <br />
                        <input
                            type="password"
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />
                        {errors.password && (
                            <div>{errors.password}</div>
                        )}
                    </div>

                    <div>
                        <label>No KTP</label>
                        <br />
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
                        <br />
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
                        <br />
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
                            Simpan
                        </button>
                    </div>

                </form>
            </div>
        </>
    );
};

export default Add;
