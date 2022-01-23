import { Layout } from '../types/page';

export const MARGINS = {
	top: 20,
	bottom: 20,
	left: 50,
	right: 50,
};

export const PAGE_WIDTH = 1403;
export const PAGE_HEIGHT = 1871;
export const CONTENT_WIDTH = PAGE_WIDTH - MARGINS.left - MARGINS.right;
export const CONTENT_HEIGHT = PAGE_HEIGHT - MARGINS.top - MARGINS.bottom;

export const LAYOUT: Layout = 'portrait';
