import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdvisorService } from './advisor.service';
import { CreateAdvisorDto } from './../tools//dtos/create-advisor.dto';
import { UpdateAdvisorDto } from './../tools//dtos/update-advisor.dto';

@Controller('advisor')
export class AdvisorController {
  constructor(private readonly advisorService: AdvisorService) {}

  @Post()
  create(@Body() createAdvisorDto: CreateAdvisorDto) {
    return this.advisorService.create(createAdvisorDto);
  }



  @Get()
  findAll() {
    return this.advisorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.advisorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdvisorDto: UpdateAdvisorDto) {
    return this.advisorService.update(+id, updateAdvisorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.advisorService.remove(+id);
  }
}
