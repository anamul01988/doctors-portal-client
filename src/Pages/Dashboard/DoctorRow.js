import React from 'react';
// import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
    const { name, specialty, img } = doctor;
    // const { name, specialty, img, email } = doctor;
    // const handleDelete =() =>{
    //     fetch(`https://frozen-ridge-08310.herokuapp.com/doctor/${email}`, {
    //                 method: 'DELETE',
    //                 headers: {
               
    //                     authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //                 }
    //             })
    //             .then(res =>res.json())
    //             .then(data =>{
    //                 console.log('DELETE', data)
    //                 if(data.deletedCount){
    //                     toast.success(`Doctor: ${name} is deleted`)
    //                     refetch();
    //                 }
    //                 else{
    //                     toast.error('Failed delete doctor');
    //                 }
    //             })
    // }
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-8 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td>
                <label onClick={() => setDeletingDoctor(doctor)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
                {/* <label onClick={() => handleDelete(email)} class="btn btn-xs btn-error">Delete</label> */}
            </td>
        </tr>
    );
};

export default DoctorRow;