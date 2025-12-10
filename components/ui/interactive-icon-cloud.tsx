"use client"

import { useEffect, useMemo, useState } from "react"
import { useTheme } from "next-themes"
import {
    Cloud,
    fetchSimpleIcons,
    ICloud,
    renderSimpleIcon,
    SimpleIcon,
} from "react-icon-cloud"

export const cloudProps: Omit<ICloud, "children"> = {
    containerProps: {
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
        },
    },
    options: {
        reverse: true,
        depth: 1,
        wheelZoom: false,
        imageScale: 2,
        activeCursor: "default",
        tooltip: "native",
        initial: [0.1, -0.1],
        clickToFront: 500,
        tooltipDelay: 0,
        outlineColour: "#0000",
        maxSpeed: 0.04,
        minSpeed: 0.02,
    },
}

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
    // Use light theme colors matching the portfolio design
    const bgHex = "#ffffff"
    const fallbackHex = "#ff8a00" // Orange accent color
    const minContrastRatio = 1.2

    return renderSimpleIcon({
        icon,
        bgHex,
        fallbackHex,
        minContrastRatio,
        size: 42,
        aProps: {
            href: undefined,
            target: undefined,
            rel: undefined,
            onClick: (e: React.MouseEvent) => e.preventDefault(),
        },
    })
}

export type DynamicCloudProps = {
    iconSlugs: string[]
}

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>

export function IconCloud({ iconSlugs }: DynamicCloudProps) {
    const [data, setData] = useState<IconData | null>(null)
    const [mounted, setMounted] = useState(false)
    const { theme } = useTheme()

    // Wait for client-side mount to avoid hydration mismatch
    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (mounted) {
            fetchSimpleIcons({ slugs: iconSlugs }).then(setData)
        }
    }, [iconSlugs, mounted])

    const renderedIcons = useMemo(() => {
        if (!data) return null

        return Object.values(data.simpleIcons).map((icon) =>
            renderCustomIcon(icon, theme || "light"),
        )
    }, [data, theme])

    // Don't render Cloud component during SSR to avoid hydration mismatch
    if (!mounted) {
        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%"
            }}>
                <div style={{ width: 100, height: 100 }} />
            </div>
        )
    }

    return (
        // @ts-ignore
        <Cloud {...cloudProps}>
            <>{renderedIcons}</>
        </Cloud>
    )
}

