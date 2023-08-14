import { Layout } from "@/app/Layouts/ui/Layout";
import { ContactPage } from "@/pages/Contact";
import { HomePage } from "@/pages/Home";
import { NotFound } from "@/pages/NotFound";
import { ServicePage } from "@/pages/Service";
import { ServicesPage } from "@/pages/Services";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        index: true,
        path: '/',
        element: (
            <Layout>
                <HomePage />
            </Layout>
        )
    },
    {
        path: '/services',
        element: (
            <Layout>
                <ServicesPage />
            </Layout>
        )
    },
    {
        path: '/services/:id',
        element: (
            <Layout>
                <ServicePage />
            </Layout>
        )
    },
    {
        path: '/contact',
        element: (
            <Layout>
                <ContactPage />
            </Layout>
        )
    },
    {
        path: '*',
        element: <NotFound />
    },
])