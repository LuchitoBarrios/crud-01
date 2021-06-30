import React from 'react'
import {useForm} from 'react-hook-form'

const EditUserForm = (props) => {

    //console.log(props.currentUser);

    const {register,errors,handleSubmit,setValue} = useForm({
        defaultValues:props.currentUser
    });

    setValue('name',props.currentUser.name);
    setValue('username',props.currentUser.name);

    const onSubmit = (data,e) =>{
        console.log(data)

        props.updateUser(props.currentUser.id,data)

        e.target.reset();
    }

    return (
        <form onSubmit ={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input 
                type="text" 
                name="name" 
                {
                    ...register("name",{
                    required:"Required",
                })
            }/>
            <div>
                {errors?.name?.message}
            </div>
            <label>Username</label>
            <input type="text" name="username"
            {
                ...register("username",{
                required:"Required",
                })
            }/>
            <div>
            {errors?.username?.message}
            </div>
            <button>Edit user</button>
        </form>
    );
}

export default EditUserForm;
