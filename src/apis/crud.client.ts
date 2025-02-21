import { Base, CreateBaseInput } from "@/types";
import { ApiClient } from "./client";

export interface CrudFindParams {
  limit?: number;
  offset?: number;
}

export interface CrudPagination {
  total: number;
  limit: number;
  offset: number;
}

export interface CrudFindResult<T extends Base> {
  data: T[];
  pagination: CrudPagination;
}

export class CrudClient<T extends Base> extends ApiClient {
  create(input: CreateBaseInput<T>): Promise<T> {
    return this.client.post("", input);
  }
  find(params?: CrudFindParams): Promise<CrudFindResult<T>> {
    return this.client.get("", { params });
  }
  findOne(id: number): Promise<T> {
    return this.client.get(`/${id}`);
  }
  update(id: number, input: Partial<T>): Promise<T> {
    return this.client.patch(`/${id}`, input);
  }
  delete(id: number): Promise<void> {
    return this.client.delete(`/${id}`);
  }
}
