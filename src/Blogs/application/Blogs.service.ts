import {BlogDTO} from "../dto/BlogModelDTO";
import {Blog} from "../models/BlogModel";
import {WithId} from "mongodb";
import {blogRepository} from "../repository/BlogRepository";
import {WithId}

export const BlogsService = {
    async findMany(
        queryDto: BlogDTO,
    ): Promise<{ items: WithId<Blog>[]; totalCount: number }> {
        return blogRepository.findMany(queryDto);
    },


    async create(dto: BlogDTO): Promise<string> {
        const newBlog: Blog = {
                name: dto.name,
                description: dto.description,
                websiteUrl: dto.websiteUrl,
                createdAt: new Date(),
                isMembership: false,


        };

        return blogRepository.create(newBlog);
    },

    async update(id: string, dto: BlogDTO): Promise<void> {
        await blogRepository.update(id, dto);
        return;
    },

    async delete(id: string): Promise<void> {
        const activeRide = await ridesRepository.findActiveRideByDriverId(id);

        if (activeRide) {
            throw new DomainError(
                `Driver has an active ride. Complete or cancel the ride first`,
                DriverErrorCode.HasActiveRide,
            );
        }

        await driversRepository.delete(id);
        return;
    },
};