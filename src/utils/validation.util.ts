import { string } from 'yup';



export const NAME_VALIDATION = string().min(3).max(100);
export const EMAIL_VALIDATION = string().email();