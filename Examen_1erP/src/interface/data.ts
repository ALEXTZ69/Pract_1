export interface IFunction{
    id: number,
    name: string,
    returnType: string,
    detail: string,
    status: string,
    parameters: IParameter[],
}

export interface IParameter{
    id: number,
    description: string,
    type: string,
    defaultValue: string,
    functionId: number,
}

export let functions : IFunction[]=[
    {
        id: 1,
        name: "sumar",
        returnType: "number",
        detail: "suma dos variables numericas",
        status: "Activa",
        parameters: [
            {
                id: 1,
                description: "variable A",
                type: "let",
                defaultValue: "0",
                functionId: 1,
            },{
                id: 2,
                description: "variable B",
                type: "let",
                defaultValue: "0",
                functionId: 1,
            }
        ],
    },
]

