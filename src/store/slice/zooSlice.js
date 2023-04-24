import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import crudService from "../../services/zoo.service";


export const createAnimal = createAsyncThunk("users/create", async (values)=>{
    const res = await crudService.createOneAnimal(values);
    return res.data;
    })
    
    export const allAnimals = createAsyncThunk("user/all", async ()=>{
        const res = await crudService.getAllAnimal();
        return res.data;
    })
    
    export const updateAnimal = createAsyncThunk("users/update", async(values)=>{
        console.log(values);
        const res = await crudService.updateOneAnimal(values.id, values.name, values.type, values.age);
        return res.data;
    
    })
    
    export const deleteAnimal = createAsyncThunk("user/delete/", async (id)=>{
        const res = await crudService.deleteOneAnimal(id);
        return res.data;
    })



const zooSlice = createSlice({
    name: "zoo",
    initialState: {
        status: "loading",
        error: "",
        animals: [],
    },
    reducers: {

    }, extraReducers: (builder)=> {
        builder
        .addCase(allAnimals.pending, (state)=>{
            state.error = "";
            state.status = "pending";
        })
        .addCase(allAnimals.rejected, (state, action)=>{
            console.log(action.error);
            state.error = action.error ? "The password or email is incorrect" : "";
            state.status = "reject";
        })
        .addCase(allAnimals.fulfilled, (state, action)=>{
            state.error = "";
            state.status = "fulfilled";
            state.animals = action.payload;
        })

        .addCase(createAnimal.pending, (state)=>{
            state.error = "";
            state.status = "pending";
        })
        .addCase(createAnimal.rejected, (state, action)=>{
            console.log(action.error);
            state.error = action.error ? "The password or email is incorrect" : "";
            state.status = "reject";
        })
        .addCase(createAnimal.fulfilled, (state, action)=>{
            state.error = "";
            state.status = "fulfilled";
            state.animals = action.payload.data;
        })

        .addCase(updateAnimal.pending, (state)=>{
            state.error = "";
            state.status = "pending";
        })
        .addCase(updateAnimal.rejected, (state, action)=>{
            console.log(action.error);
            state.error = action.error ? "The password or email is incorrect" : "";
            state.status = "reject";
        })
        .addCase(updateAnimal.fulfilled, (state, action)=>{
            state.error = "";
            state.status = "fulfilled";
            state.animals = action.payload.data;
        })

        .addCase(deleteAnimal.pending, (state)=>{
            state.error = "";
            state.status = "pending";
        })
        .addCase(deleteAnimal.rejected, (state, action)=>{
            console.log(action.error);
            state.error = action.error ? "The password or email is incorrect" : "";
            state.status = "reject";
        })
        .addCase(deleteAnimal.fulfilled, (state, action)=>{
            state.error = "";
            state.status = "fulfilled";
            state.animals = action.payload.data;
        })
    }
    
})

export default zooSlice.reducer;