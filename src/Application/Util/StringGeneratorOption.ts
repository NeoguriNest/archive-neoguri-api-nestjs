import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";

export type StringGeneratorOption = {
    length: number;
    withNumber?: boolean;
}