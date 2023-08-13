import { PartialType } from '@nestjs/mapped-types';
import { CreateNewUserDto } from './create-new-user.dto';

export class UpdateNewUserDto extends PartialType(CreateNewUserDto) {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  companyName: string;
  companyWebsite: string;
  address: string;
  city: string;
  postalCode: number;
  country: string;
  state: string;
}
