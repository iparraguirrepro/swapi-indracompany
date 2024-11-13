import {
  Body,
  Controller,
  Get,
  Inject,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { Create, FindOneParams } from './Validations';
import { StarshipCreate } from '../application/StarshipCreate';
import { StarshipGetAll } from '../application/StarshipGetAll';
import { StarshipBulk } from '../application/StarshipBulk';
import { SwapiRepository } from './Swapi/Swapi.repository';
import { ApiOperation } from '@nestjs/swagger';
import { CREATE, CREATE_BULK } from '../../../commons/constants/message';

@Controller('starships')
export class StarshipController {
  constructor(
    @Inject('StarshipGetAll') private readonly starshipGetAll: StarshipGetAll,
    @Inject('StarshipCreate') private readonly starshipCreate: StarshipCreate,
    @Inject('StarshipBulk') private readonly starshipBulk: StarshipBulk,
    //
    private readonly swapiRepository: SwapiRepository,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Return starships from swapi' })
  async getAll() {
    return await this.swapiRepository.getAllStarships();
  }

  @Get('/stored')
  @ApiOperation({ summary: 'Return starships on database' })
  async getAllStored() {
    return await this.starshipGetAll.run();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Return starship by id from swapi' })
  async getById(@Param() params: FindOneParams) {
    try {
      return await this.swapiRepository.getStarshipById(params.id);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  @Post('/create')
  @ApiOperation({ summary: 'Create starship on database' })
  async createOne(@Body() body: Create) {
    await this.starshipCreate.run(body);
    return {
      message: CREATE,
    };
  }

  @Post('/bulk')
  @ApiOperation({ summary: 'Create many starships on database' })
  async createMany(@Body() body: Create[]) {
    await this.starshipBulk.run(body);
    return {
      message: CREATE_BULK,
    };
  }
}
