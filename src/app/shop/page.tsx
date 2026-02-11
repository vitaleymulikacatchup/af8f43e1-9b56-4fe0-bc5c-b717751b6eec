"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCatalog from "@/components/ecommerce/productCatalog/ProductCatalog";
import ProductCart from "@/components/ecommerce/cart/ProductCart";
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { useProductCatalog } from "@/hooks/useProductCatalog";
import { useCart } from "@/hooks/useCart";
import { useCheckout } from "@/hooks/useCheckout";
import { useCallback } from "react";

export default function ShopPage() {
    const {
        products,
        isLoading,
        search,
        setSearch,
        filters,
    } = useProductCatalog({ basePath: "/shop" });

    const {
        items: cartItems,
        isOpen: cartOpen,
        setIsOpen: setCartOpen,
        updateQuantity,
        removeItem,
        total: cartTotal,
        getCheckoutItems,
    } = useCart();

    const { checkout, isLoading: isCheckoutLoading } = useCheckout();

    const handleCheckout = useCallback(async () => {
        if (cartItems.length === 0) return;

        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set("success", "true");

        await checkout(getCheckoutItems(), { successUrl: currentUrl.toString() });
    }, [cartItems, checkout, getCheckoutItems]);

    if (isLoading) {
        return (
            <ThemeProvider
                defaultButtonVariant="expand-hover"
                defaultTextAnimation="background-highlight"
                borderRadius="soft"
                contentWidth="medium"
                sizing="largeSizeMediumTitles"
                background="circleGradient"
                cardStyle="outline"
                primaryButtonStyle="gradient"
                secondaryButtonStyle="radial-glow"
                headingFontWeight="normal"
            >
                <ReactLenis root>
                    <div id="navbar" data-section="navbar">
                        <NavbarStyleApple
                            brandName="Ymnik"
                            navItems={[
                                { name: "Home", id: "/" },
                                { name: "Shop", id: "/shop" }
                            ]}
                            button={{ text: "Cart", onClick: () => setCartOpen(true) }}
                        />
                    </div>
                    <main className="min-h-screen flex items-center justify-center pt-20">
                        <p className="text-foreground">Loading products...</p>
                    </main>
                    <div id="footer" data-section="footer">
                        <FooterLogoReveal
                            logoText="Ymnik"
                            leftLink={{ text: "Privacy Policy", href: "#" }}
                            rightLink={{ text: "Terms of Service", href: "#" }}
                        />
                    </div>
                </ReactLenis>
            </ThemeProvider>
        );
    }

    return (
        <ThemeProvider
            defaultButtonVariant="expand-hover"
            defaultTextAnimation="background-highlight"
            borderRadius="soft"
            contentWidth="medium"
            sizing="largeSizeMediumTitles"
            background="circleGradient"
            cardStyle="outline"
            primaryButtonStyle="gradient"
            secondaryButtonStyle="radial-glow"
            headingFontWeight="normal"
        >
            <ReactLenis root>
                <div id="navbar" data-section="navbar">
                    <NavbarStyleApple
                        brandName="Ymnik"
                        navItems={[
                            { name: "Home", id: "/" },
                            { name: "Shop", id: "/shop" }
                        ]}
                        button={{ text: "Cart", onClick: () => setCartOpen(true) }}
                    />
                </div>
                <div id="productCatalog" data-section="productCatalog">
                    <ProductCatalog
                        layout="page"
                        products={products}
                        searchValue={search}
                        onSearchChange={setSearch}
                        searchPlaceholder="Search products..."
                        filters={filters}
                        emptyMessage="No products found"
                    />
                </div>
                <div id="productCart" data-section="productCart">
                    <ProductCart
                        isOpen={cartOpen}
                        onClose={() => setCartOpen(false)}
                        items={cartItems}
                        onQuantityChange={updateQuantity}
                        onRemove={removeItem}
                        total={`$${cartTotal}`}
                        buttons={[
                            {
                                text: isCheckoutLoading ? "Processing..." : "Check Out",                                onClick: handleCheckout,
                            },
                        ]}
                    />
                </div>
                <div id="footer" data-section="footer">
                    <FooterLogoReveal
                        logoText="Ymnik"
                        leftLink={{ text: "Privacy Policy", href: "#" }}
                        rightLink={{ text: "Terms of Service", href: "#" }}
                    />
                </div>
            </ReactLenis>
        </ThemeProvider>
    );
}