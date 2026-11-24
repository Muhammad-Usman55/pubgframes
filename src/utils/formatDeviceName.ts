export function formatDeviceName(brand: string, model: string): string {
  const cleanBrand = (brand || '').trim();
  const cleanModel = (model || '').trim();
  if (!cleanBrand) return cleanModel;
  if (!cleanModel) return cleanBrand;

  const lowerBrand = cleanBrand.toLowerCase();
  const lowerModel = cleanModel.toLowerCase();

  if (
    lowerModel === lowerBrand ||
    lowerModel.startsWith(`${lowerBrand} `) ||
    lowerModel.startsWith(`${lowerBrand}-`)
  ) {
    return cleanModel;
  }

  // Handle Galaxy models branded as Samsung without duplicate if needed
  if (lowerBrand === 'apple' && lowerModel.startsWith('iphone')) {
    return cleanModel;
  }
  if (lowerBrand === 'apple' && lowerModel.startsWith('ipad')) {
    return cleanModel;
  }

  return `${cleanBrand} ${cleanModel}`;
}
