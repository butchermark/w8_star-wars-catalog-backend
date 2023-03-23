import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { UserAuthGuard } from 'src/guard/auth.guard';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signin')
  async signinLocal(@Body() dto: AuthDto, @Res() res: Response): Promise<any> {
    const jwt = await this.authService.signinLocal(dto);
    res.setHeader('Authorization', 'Bearer' + jwt.accesstoken);
    return res.json(jwt);
  }

  @Get('/authenticate')
  @UseGuards(UserAuthGuard)
  isAuthenticated(@Req() req: Request): any {
    const user: any = req.user;
    return user;
  }
}
