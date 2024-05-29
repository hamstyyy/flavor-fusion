import { Controller, HttpCode, HttpStatus, Get } from '@nestjs/common';
import { RecipesService } from './recipes.service';

@Controller('/recipes')
export class RecipesController {
  constructor(private recipesService: RecipesService) {}

  @HttpCode(HttpStatus.OK)
  @Get('')
  findAll() {
    return this.recipesService.findAll();
  }
}
