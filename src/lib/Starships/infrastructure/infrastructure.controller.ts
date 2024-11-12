import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Create, Edit, FindOneParams } from './Validations';
import { StarshipCreate } from '../application/StarshipCreate';
import { StarshipGetAll } from '../application/StarshipGetAll';

@Controller('starships')
export class StarshipController {
  constructor(
    @Inject('UserGetAll') private readonly starshipGetAll: StarshipGetAll,
    // @Inject('UserGetOneById') private readonly starshipGetByName: UserGetOneById,
    // @Inject('UserCreate') private readonly starshipCreate: StarshipCreate,
    // @Inject('UserEdit') private readonly userEdit: UserEdit,
    // @Inject('UserDelete') private readonly userDelete: UserDelete,
  ) {}

  @Get()
  async getAll() {
    return (await this.starshipGetAll.run()).map((u) => u.toPlainObject());
  }

  // @Get(':id')
  // async getByBName(@Param() params: FindOneParams) {
  //   try {
  //     return (await this.userGetOneById.run(params.id)).toPlainObject();
  //   } catch (error) {
  //     if (error instanceof UserNotFoundError) {
  //       throw new NotFoundException();
  //     }
  //     throw error;
  //   }
  // }
  //
  // @Post()
  // async create(@Body() body: Create) {
  //   return await this.userCreate.run(
  //     body.id,
  //     body.name,
  //     body.email,
  //     new Date(),
  //   );
  // }
  //
  // @Put(':id')
  // async updateById(@Param() params: FindOneParams, @Body() body: Edit) {
  //   return await this.userEdit.run(
  //     params.id,
  //     body.name,
  //     body.email,
  //     new Date(),
  //   );
  // }
}
