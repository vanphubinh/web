/**
 * This file was auto-generated by @openapi-qraft/cli.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/categories/create_category": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create a new category
         * @description Create a new category with the given name and optional parent category
         */
        post: operations["create_category"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/categories/delete_category/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Delete category by ID
         * @description Delete a category by its ID
         */
        post: operations["delete_category"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/categories/get_category_by_id/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a category by ID */
        get: operations["get_category_by_id"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/categories/list_categories": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all categories with pagination
         * @description Get a paginated list of all categories
         */
        get: operations["list_categories"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/products/create_product": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create a new product
         * @description Create a new product with payload containing product name, type, subtype, uom, price, cost, category, and description
         */
        post: operations["create_product"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
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
        /** Delete a UOM by ID */
        post: operations["delete_uom"];
        delete?: never;
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
        /**
         * Get all UOMs with pagination
         * @description Get a paginated list of all UOMs
         */
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
        /** @description Response type for a single category */
        CategoryDto: {
            /** Format: uuid */
            id: string;
            name: string;
            /** Format: uuid */
            parent_category_id?: string | null;
        };
        CreateCategoryInput: {
            /** @description Category name */
            name: string;
            /**
             * Format: uuid
             * @description Optional parent category ID
             */
            parentCategoryId?: string | null;
        };
        /** @description Create product request containing all requred fields */
        CreateProductRequest: {
            /**
             * Format: uuid
             * @description Optional category ID
             */
            categoryId?: string | null;
            /**
             * @description Product cost
             * @example 1.0
             */
            cost: string;
            /** @description Optional description */
            description?: string | null;
            /** @description Product name */
            name: string;
            /**
             * @description Product price
             * @example 1.0
             */
            price: string;
            /** @description Product subtype */
            productSubtype: components["schemas"]["ProductSubtype"];
            /** @description Product type */
            productType: components["schemas"]["ProductType"];
            /**
             * Format: uuid
             * @description Unit of measure ID
             */
            uomId: string;
        };
        /** @description Input type for creating a new product template */
        CreateProductTemplateInput: {
            /** Format: uuid */
            categoryId?: string | null;
            description?: string | null;
            name: string;
            productSubtype: components["schemas"]["ProductSubtype"];
            productType: components["schemas"]["ProductType"];
            /** Format: uuid */
            uomId: string;
        };
        /** @description Standard response for create operations that returns only the UUID */
        CreateResponse: {
            /** Format: uuid */
            id: string;
        };
        CreateUomInput: {
            name: string;
        };
        PaginationMeta: {
            /** Format: int64 */
            page: number;
            /** Format: int64 */
            perPage: number;
            /** Format: int64 */
            total: number;
            /** Format: int64 */
            totalPages: number;
        };
        /** @description Pagination request parameters */
        PaginationParams: {
            /** Format: int64 */
            page?: number | null;
            /** Format: int64 */
            per_page?: number | null;
        };
        /** @description Response type for a single product */
        ProductDto: {
            /** Format: double */
            cost: number;
            /** Format: uuid */
            id: string;
            /** Format: double */
            price: number;
            /** Format: uuid */
            productTemplateId: string;
        };
        /** @enum {string} */
        ProductSubtype: "standard" | "to_print_packaging" | "printing_mould";
        /** @description Response type for a single product template */
        ProductTemplateDto: {
            /** Format: uuid */
            categoryId?: string | null;
            description: string;
            /** Format: uuid */
            id: string;
            name: string;
            productSubtype: components["schemas"]["ProductSubtype"];
            productType: components["schemas"]["ProductType"];
            /** Format: uuid */
            uomId: string;
        };
        /** @enum {string} */
        ProductType: "goods" | "service";
        /** @description Response type for a single UOM */
        UomDto: {
            /** Format: uuid */
            id: string;
            name: string;
        };
    };
    responses: {
        /** @description Response type for a single category */
        CategoryDto: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    /** Format: uuid */
                    id: string;
                    name: string;
                    /** Format: uuid */
                    parent_category_id?: string | null;
                };
            };
        };
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
        PaginationMeta: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    /** Format: int64 */
                    page: number;
                    /** Format: int64 */
                    perPage: number;
                    /** Format: int64 */
                    total: number;
                    /** Format: int64 */
                    totalPages: number;
                };
            };
        };
        /** @description Response type for a single product */
        ProductDto: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    /** Format: double */
                    cost: number;
                    /** Format: uuid */
                    id: string;
                    /** Format: double */
                    price: number;
                    /** Format: uuid */
                    productTemplateId: string;
                };
            };
        };
        /** @description Response type for a single product template */
        ProductTemplateDto: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    /** Format: uuid */
                    categoryId?: string | null;
                    description: string;
                    /** Format: uuid */
                    id: string;
                    name: string;
                    productSubtype: components["schemas"]["ProductSubtype"];
                    productType: components["schemas"]["ProductType"];
                    /** Format: uuid */
                    uomId: string;
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
                    /** Format: uuid */
                    id: string;
                    name: string;
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
    create_category: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateCategoryInput"];
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
    delete_category: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Category ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: {
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
    get_category_by_id: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier of the category to retrieve */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Category found */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CategoryDto"];
                };
            };
            /** @description Category not found */
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
    list_categories: {
        parameters: {
            query?: {
                /** @description Page number */
                page?: number;
                /** @description Items per page */
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
                        data: components["schemas"]["CategoryDto"][];
                        meta: components["schemas"]["PaginationMeta"];
                    };
                };
            };
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
    create_product: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateProductRequest"];
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
                        meta: components["schemas"]["PaginationMeta"];
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
