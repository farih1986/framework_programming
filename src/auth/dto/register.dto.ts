import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class RegisterDto {
    @IsString({ message: 'Nama harus berupa teks' })
    @IsNotEmpty({ message: 'Nama wajib diisi' })
    @MinLength(2, { message: 'Nama minimal 2 karakter' })
    @MaxLength(100, { message: 'Nama maksimal 100 karakter' })
    readonly name: string;

    @IsEmail({}, { message: 'Email harus valid' })
    @IsNotEmpty({ message: 'Email wajib diisi' })
    readonly email: string;

    @IsString({ message: 'Password harus berupa teks' })
    @IsNotEmpty({ message: 'Password wajib diisi' })
    @MinLength(8, { message: 'Password minimal 8 karakter' })
    readonly password: string;

    @IsString({ message: 'Gender harus berupa teks' })
    @IsNotEmpty({ message: 'Gender wajib diisi' })
    readonly gender: string;
}