import express from 'express'
import bcrypt from 'bcrypt'
import { Admin } from './models/Admin.js'
import './db.js'

async function AdminAccount(){
    try{
        const adminCount = await Admin.countDocuments()
        if(adminCount===0){
            const hashPassword = await bcrypt.hash('ranjani123@',10)
            const newAdmin = new Admin({
                username:'ranjani1234',
                password:hashPassword
            })
            await newAdmin.save()
            console.log("account created")
        }else{
            console.log("account already existed")
        }
    }catch(err){
        console.log("error")

    }
}
AdminAccount()