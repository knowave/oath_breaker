import {Controller, Get} from '@nestjs/common';
import {UserService} from "./user.service";

@Controller('user')
export class UserController {
    constructor(private userService : UserService) {
        this.userService = userService;
    }

    @Get()
    getHello(): string {
        return this.userService.getHello();
    }
}
