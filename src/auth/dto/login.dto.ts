import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
    @IsEmail({}, { message: 'Email harus valid' })
    @IsNotEmpty({ message: 'Email wajib diisi' })
    readonly email: string;

    @IsString({ message: 'Password harus berupa teks' })
    @IsNotEmpty({ message: 'Password wajib diisi' })
    readonly password: string;
}