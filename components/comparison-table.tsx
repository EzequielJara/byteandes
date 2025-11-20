import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ComparisonTable() {
  const features = [
    { name: "Core Features", basic: true, pro: true, enterprise: true },
    { name: "Unlimited Projects", basic: false, pro: true, enterprise: true },
    { name: "API Access", basic: false, pro: true, enterprise: true },
    { name: "Advanced Analytics", basic: false, pro: true, enterprise: true },
    { name: "Custom Integrations", basic: false, pro: false, enterprise: true },
    { name: "Dedicated Support", basic: false, pro: false, enterprise: true },
    { name: "SLA Guarantee", basic: false, pro: false, enterprise: true },
  ]

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1f2937] via-[#374151] to-[#1f2937]"></div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#4f46e5] to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#4f46e5] to-transparent opacity-30"></div>

      <div className="container relative px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-[#4f46e5] font-medium mb-2">Plan Comparison</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1f2937]">Find the Perfect Plan</h2>
          <p className="text-[#6b7280] text-lg">
            Compare our plans to find the one that best suits your needs. All plans include our core features.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              <div className="grid grid-cols-4 gap-4 mb-8">
                <div className="col-span-1"></div>
                <div className="col-span-1 text-center">
                  <div className="font-bold text-xl mb-2 text-[#1f2937]">Basic</div>
                  <div className="text-3xl font-bold mb-2 text-[#1f2937]">
                    $29<span className="text-lg text-[#6b7280]">/mo</span>
                  </div>
                  <div className="text-sm text-[#6b7280] mb-4">For small teams</div>
                  <Button variant="outline" className="w-full border-[#d1d5db] hover:bg-[#f2efe5]">
                    Get Started
                  </Button>
                </div>
                <div className="col-span-1 text-center relative">
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-[#4f46e5] text-white text-xs font-bold py-1 px-3 rounded-full">
                    MOST POPULAR
                  </div>
                  <div className="font-bold text-xl mb-2 text-[#1f2937]">Professional</div>
                  <div className="text-3xl font-bold mb-2 text-[#1f2937]">
                    $79<span className="text-lg text-[#6b7280]">/mo</span>
                  </div>
                  <div className="text-sm text-[#6b7280] mb-4">For growing businesses</div>
                  <Button className="w-full bg-[#4f46e5] hover:bg-[#20418d]">Get Started</Button>
                </div>
                <div className="col-span-1 text-center">
                  <div className="font-bold text-xl mb-2 text-[#1f2937]">Enterprise</div>
                  <div className="text-3xl font-bold mb-2 text-[#1f2937]">
                    $149<span className="text-lg text-[#6b7280]">/mo</span>
                  </div>
                  <div className="text-sm text-[#6b7280] mb-4">For large organizations</div>
                  <Button variant="outline" className="w-full border-[#d1d5db] hover:bg-[#f2efe5]">
                    Contact Sales
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="grid grid-cols-4 gap-4 py-4 border-t border-[#e5e7eb]">
                    <div className="col-span-1 flex items-center font-medium text-[#1f2937]">{feature.name}</div>
                    <div className="col-span-1 flex justify-center items-center">
                      {feature.basic ? (
                        <Check className="h-5 w-5 text-[#4f46e5]" />
                      ) : (
                        <X className="h-5 w-5 text-[#9ca3af]" />
                      )}
                    </div>
                    <div className="col-span-1 flex justify-center items-center">
                      {feature.pro ? (
                        <Check className="h-5 w-5 text-[#4f46e5]" />
                      ) : (
                        <X className="h-5 w-5 text-[#9ca3af]" />
                      )}
                    </div>
                    <div className="col-span-1 flex justify-center items-center">
                      {feature.enterprise ? (
                        <Check className="h-5 w-5 text-[#4f46e5]" />
                      ) : (
                        <X className="h-5 w-5 text-[#9ca3af]" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}