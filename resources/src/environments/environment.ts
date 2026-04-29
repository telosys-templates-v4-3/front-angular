// Environment configuration for 'ng build' mode (CI/CD pipeline, Qualif, Prod, etc.)
export const environment = {
    apiRootUrl: '{ci-server-var}/api/v1/' // CI/CD variable substitution
    // example with hardcoded value for production server:
    //  apiRootUrl: 'https://my-production-server.com/api/v1/'        
};
