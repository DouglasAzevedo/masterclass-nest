/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { CreateTeamMemberBody } from './dtos/create-team-member-body';
import { RocketMembersRepository } from './repositories/rocket-member-repository';

@Controller('app')
export class AppController {
  constructor(
    private rocketMemberRepository: RocketMembersRepository
  ) {}

  @Post('hello')
  async createTeamMember(@Body() body: CreateTeamMemberBody) {
    const {name, function: memberFunction} = body;

    await this.rocketMemberRepository.create(name, memberFunction);
  }
}
