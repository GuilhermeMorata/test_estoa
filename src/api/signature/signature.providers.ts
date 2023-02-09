import { SignatureTable } from "src/entity/signature.entity";


export const signatureProviders = [
    {
        provide: "SIGNATURE_REPOSITORY",
        useValue: SignatureTable,
    },
];
