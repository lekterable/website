'use server'

import admin from './admin'

export const addMember = async (email: string) => admin.members.add({ email })
