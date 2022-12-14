/* @refresh reload */
import { type Component } from "solid-js";
import { render } from "solid-js/web";
import Layout from "./components/layout";
import { Link } from "./components/link";

const PageNotFound: Component = () => {
    return (
        <Layout title={ "Siden ble ikke funnet" }>
            <div class={ "text-center" }>
                <h4>Error 404 - Siden ble ikke funnet</h4>
                <p>
                    <Link to={ "/" } newTab={ false } className={ "mx-auto relative w-max" }>
                        Gå tilbake til forsiden
                    </Link>
                </p>
            </div>
        </Layout>
    );
};

render(() => <PageNotFound />, document.getElementById("root") as HTMLElement);
