import { Logger } from "log4js";
import { Controller, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import injector from '@modules/utils/injector'
import { UserService } from "app/domains/user/services/user.service";

@Controller('/todo')
export class TodoController {
    logger: Logger
    userService: UserService

    constructor(){
      this.logger = injector('logger')
      this.userService = injector('userService')
    }
 
    @Get("/users")
    getAll() {
      return this.userService.getAll()
    }
 
    @Get("/users/:id")
    getOne(@Param("id") id: number) {
      this.logger.info(`User pediu param: ${id} foo`)
      return "This action returns user #" + id;
    }
 
    @Post("/users")
    post(@Body() user: any) {
      return "Saving user...";
    }
 
    @Put("/users/:id")
    put(@Param("id") id: number, @Body() user: any) {
      return "Updating a user...";
    }
 
    @Delete("/users/:id")
    remove(@Param("id") id: number) {
      return "Removing user...";
    }
 
}