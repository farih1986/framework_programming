import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto.js';
import { User } from './entities/user-entity.js';
import { LoginDto } from './dto/login.dto.js';
import { ForgotPasswordDto } from './dto/forgot-password.dto.js';
import { PasswordRecoveryDto } from './dto/password-recovery.js';

@Injectable()
export class AuthService {

    register(registerDto: RegisterDto): User {
        const newUser = new User();
        newUser.name = registerDto.name;
        newUser.email = registerDto.email;
        newUser.password = registerDto.password;
        newUser.gender = registerDto.gender;

        return newUser;
    }

    login(loginDto: LoginDto): User {
        const user = new User();
        user.email = loginDto.email;
        user.password = loginDto.password;

        return user;
    }

    forgotPassword(forgotPasswordDto: ForgotPasswordDto): User {
        const user = new User();
        user.email = forgotPasswordDto.email;
        return user;
    }

    passwordRecovery(passwordRecoveryDto: PasswordRecoveryDto): User {
        const user = new User();
        user.email = passwordRecoveryDto.email;
        user.password = passwordRecoveryDto.password;
        
        return user;
    }
}
