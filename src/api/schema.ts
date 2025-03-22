/**
 * This file was auto-generated by @openapi-qraft/cli.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/uoms/create_uom": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create a new UOM
         * @description Create a new UOM with the given name
         */
        post: operations["create_uom"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/uoms/delete_uom/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete a UOM by ID */
        delete: operations["delete_uom"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/uoms/get_uom_by_id/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a UOM by ID */
        get: operations["get_uom_by_id"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/uoms/list_uoms": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List all UOMs with pagination */
        get: operations["list_uoms"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** @description Standard response for create operations that returns only the UUID */
        CreateResponse: {
            /** Format: uuid */
            id: string;
        };
        /** @description Input type for creating a new UOM */
        CreateUomInput: {
            name: string;
        };
        /** @description Pagination request parameters */
        PaginationParams: {
            /** Format: int64 */
            page?: number | null;
            /** Format: int64 */
            per_page?: number | null;
        };
        /** @description Response type for a single UOM */
        UomDto: {
            /** Format: date-time */
            created_at: string;
            /** Format: uuid */
            id: string;
            name: string;
            /** Format: date-time */
            updated_at?: string | null;
        };
    };
    responses: {
        /** @description Standard response for create operations that returns only the UUID */
        CreateResponse: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    /** Format: uuid */
                    id: string;
                };
            };
        };
        /** @description Response type for a single UOM */
        UomDto: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    /** Format: date-time */
                    created_at: string;
                    /** Format: uuid */
                    id: string;
                    name: string;
                    /** Format: date-time */
                    updated_at?: string | null;
                };
            };
        };
    };
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    create_uom: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateUomInput"];
            };
        };
        responses: {
            201: components["responses"]["CreateResponse"];
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    delete_uom: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier of the UOM to delete */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description UOM successfully deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description UOM not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    get_uom_by_id: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier of the UOM to retrieve */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description UOM found */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UomDto"];
                };
            };
            /** @description UOM not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    list_uoms: {
        parameters: {
            query?: {
                /** @description Page number for pagination */
                page?: number;
                /** @description Number of items per page */
                page_size?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Pagination response - a generic wrapper for paginated data */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["UomDto"][];
                        /** Format: int64 */
                        page: number;
                        /** Format: int64 */
                        per_page: number;
                        /** Format: int64 */
                        total: number;
                        /** Format: int64 */
                        total_pages: number;
                    };
                };
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
}
