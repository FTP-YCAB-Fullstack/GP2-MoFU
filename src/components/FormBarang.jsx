import React from 'react'

const Input = ({name , text , type = "text"}) => {
    return <input name={name} type={type} placeholder={text} className="block border-2 border-gray-200 py-2 px-6 my-4 w-5/6 mx-auto rounded-lg" />
}

const FormBarang = () => {
    return (
            <div className="rounded-lg p-8 text-center bg-gray-100 mb-20">
                <h1 className="text-3xl font-bold ">Kirim Barang Lelang</h1>
                <form>
                    <Input name="name" text="Nama Barang" />
                    <Input name="time" type="date" text="Waktu" />
                    <Input name="image" type="url" text="Gambar Barang" />
                    <textarea name="description" className="block border-2 border-gray-200 py-2 px-6 my-4 w-5/6 mx-auto rounded-lg" placeholder="Deskripsi" ></textarea>
                    <button className="bg-blue-400 text-white rounded-md py-2 px-8 text-lg font-semibold uppercase">Kirim</button>
                </form>
            </div>
    )
}

export default FormBarang