import { site } from '../config/site';
import { allRoutes, type PageId } from '../i18n';

/** Pages that exist on the public site. The Company page stays out until `site.companyPublic` is true. */
export const isLive = (id: PageId) => id !== 'company' || site.companyPublic;

/** Every route that is built and listed in the sitemap. */
export const liveRoutes = allRoutes.filter((r) => isLive(r.id));
