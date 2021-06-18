import { NextPageContext } from "next";
import React, { Component } from "react";
import { parseCookies } from "../utils";

const unauthenticatedRoutes = ["/signin", "/signup", "/forgot-password"];

const withAuth = (WrappedComponent: React.ComponentType<any>) => {
	return class extends Component {
		static getInitialProps = async (ctx: NextPageContext) => {
			const data = await parseCookies(ctx.req);
			if (ctx.res && data.accessToken && unauthenticatedRoutes.includes(ctx.pathname)) {
				ctx.res.writeHead(301, {
					Location: "/home",
				});
				ctx.res.end();
				return {};
			}
			return {};
		};
		render() {
			return <WrappedComponent {...this.props} />;
		}
	};
};
export default withAuth;
