/* tslint:disable */
/* eslint-disable */
/**
 * Rick and Morty API
 * Access information about characters from Rick and Morty.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  Character,
  CharacterListResponse,
} from '../models/index';
import {
    CharacterFromJSON,
    CharacterToJSON,
    CharacterListResponseFromJSON,
    CharacterListResponseToJSON,
} from '../models/index';

export interface GetCharactersRequest {
    page?: number;
}

export interface GetSingleCharacterRequest {
    id: number;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * Fetch list of characters
     */
    async getCharactersRaw(requestParameters: GetCharactersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CharacterListResponse>> {
        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/character`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CharacterListResponseFromJSON(jsonValue));
    }

    /**
     * Fetch list of characters
     */
    async getCharacters(requestParameters: GetCharactersRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CharacterListResponse> {
        const response = await this.getCharactersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Fetch single character by ID
     */
    async getSingleCharacterRaw(requestParameters: GetSingleCharacterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Character>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getSingleCharacter.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/character/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CharacterFromJSON(jsonValue));
    }

    /**
     * Fetch single character by ID
     */
    async getSingleCharacter(requestParameters: GetSingleCharacterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Character> {
        const response = await this.getSingleCharacterRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
